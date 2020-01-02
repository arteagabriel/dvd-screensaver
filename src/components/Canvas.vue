<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import defaultImage from '../../public/dvd-logo.png';

    const ASPECT_RATIO = 239 / 488;

    export default {
      data: function() {
        return {
          iconImage: null,
          icon: null,
          context: null,
          raf: null,
          directionX: 1,
          directionY: 1,
        }
      },
      computed: {
        vx: function() {
          return this.$store.state.velocityX * this.directionX;
        },
        vy: function() {
          return this.$store.state.velocityY * this.directionY;
        },
        canvas: function() {
          return this.$refs.canvas;
        }
      },
      mounted: function() {
        this.initiateCanvas();
      },
      methods: {
        initiateCanvas: function() {
          window.removeEventListener('resize', this.handleWindowResize);

          this.setCanvasDimensions();
          this.setDefaultImage();

          window.addEventListener('resize', this.handleWindowResize);
        },
        setDefaultImage: function() {
          const width = this.canvas.width * 0.15;
          const height = width * ASPECT_RATIO;
          const url = `${location.protocol}//${location.host}${location.pathname}${defaultImage}`;

          this.iconImage = new Image(width, height);
          this.iconImage.src = url;

          this.iconImage.addEventListener('load', this.renderIcon);
        },
        setCanvasDimensions: function() {
          const parent = this.canvas.parentElement;
          const { clientWidth: width, clientHeight: height } = parent;

          this.canvas.width = width;
          this.canvas.height = height;
        },
        checkCanvasBoundaries: function() {
          const { width, height } = this.iconImage;
          const icon = this.icon;
          const upperBoundaryX = icon.x + width + 1;
          const upperBoundaryY = icon.y + height + 1;
          const lowerBoundaryX = icon.x + this.vx;
          const lowerBoundaryY = icon.y + this.vy;
          let wallHitX = false;
          let wallHitY = false;

          if (upperBoundaryX > this.canvas.width || lowerBoundaryX < 0) {
            this.directionX = -this.directionX;

            this.$store.commit('incrementWallCount');
            wallHitX = true;
          }

          if (upperBoundaryY > this.canvas.height || lowerBoundaryY < 0) {
            this.directionY = -this.directionY;

            this.$store.commit('incrementWallCount');
            wallHitY = true;
          }

          if (wallHitX && wallHitY) {
            this.$store.commit('incrementCornerCount');
          }
        },
        updateImageDimensions: function() {
          const width = this.canvas.width * 0.15;
          const height = width * ASPECT_RATIO;

          this.iconImage.width = width;
          this.iconImage.height = height;
        },
        handleWindowResize: function() {
          this.setCanvasDimensions();
          this.checkCanvasBoundaries();
          this.updateImageDimensions();
        },
        draw: function() {
          this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
          this.icon.draw();
          this.icon.x += this.vx;
          this.icon.y += this.vy;

          this.checkCanvasBoundaries();

          this.raf = window.requestAnimationFrame(this.draw);
        },
        renderIcon: function() {
          const iconImage = this.iconImage;
          const { width: iconWidth, height: iconHeight } = iconImage;
          const { width: canvasWidth, height: canvasHeight } = this.canvas;
          const context = this.context = this.canvas.getContext('2d');

          this.icon = {
            x: Math.floor(Math.random() * Math.floor(canvasWidth - iconWidth)),
            y: Math.floor(Math.random() * Math.floor(canvasHeight - iconHeight)),
            draw: function() {
              context.drawImage(iconImage, this.x, this.y, iconWidth, iconHeight);
            }
          };

          this.raf = window.requestAnimationFrame(this.draw);
          this.icon.draw();
        }
      },
      beforeDestroy: function() {
        this.iconImage.removeEventListener('load', this.renderIcon);
      },
    }
</script>
