<template>
    <main :class="$style.screensaver" @mousemove="handleMouseMove">
        <Canvas />
        <Stats :class="[ $style.stats, { [$style.statsActive]: $store.state.statsActive }]" />

        <Button
                :class="[$style.button, { [$style.buttonActive]: mouseMoving && !$store.state.toolbarActive }]"
                :primary="true"
                @button-click="$store.commit('toggleToolbar')"
        >
            Options
        </Button>
    </main>
</template>

<script>
  import Canvas from './Canvas';
  import Button from './Button'
    import Stats from './Stats';

    let timeout = null;

    export default {
      data: function() {
        return {
          mouseMoving: false
        }
      },
      components: {
        Canvas,
        Button,
        Stats
      },
      methods: {
        handleMouseMove: function() {
          this.mouseMoving = true;

          clearTimeout(timeout);

          timeout = setTimeout(() => {
            this.mouseMoving = false;
          }, 1000);
        }
      },
      destroyed: function() {
        timeout = null;
      }
    }
</script>

<style module lang="scss">
    .screensaver {
        position: relative;
        background-color: $black;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
    }

    .button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        opacity: 0;
        pointer-events: none;

        &.buttonActive {
            opacity: 1;
            pointer-events: auto;
        }
    }

    .stats {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: 0.2s ease-in-out;
        pointer-events: none;

        &.statsActive {
            opacity: 1;
            pointer-events: auto;
        }
    }
</style>