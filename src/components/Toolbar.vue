<template>
    <aside :class="[$style.toolbar, { [$style.toolbarActive]: $store.state.toolbarActive }]">
        <h1 :class="$style.title">Options</h1>

        <Range
            :max="10"
            :value="parseInt($store.state.velocityX)"
            @range-input="event => $store.commit('setVelocityX', event.target.value)"
        >
            Velocity X
        </Range>

        <Range
            :max="10"
            :value="parseInt($store.state.velocityY)"
            @range-input="event => $store.commit('setVelocityY', event.target.value)"
        >
            Velocity Y
        </Range>

        <Range
            :min="0"
            :max="maxPositionX"
            :value="parseInt($store.state.positionX)"
            @range-input="event => $store.commit('setPositionX', event.target.value)"
        >
            Position X
        </Range>

        <Range
            :min="0"
            :max="maxPositionY"
            :value="parseInt($store.state.positionY)"
            @range-input="event => $store.commit('setPositionY', event.target.value)"
        >
            Position Y
        </Range>

        <Checkbox>Show Stats</Checkbox>

        <Button
            :class="$style.closeButton"
            :outline="true"
            @button-click="$store.commit('toggleToolbar')"
        >
            Close
        </Button>
    </aside>
</template>

<script>
    import Button from './Button';
    import Range from './Range';
    import Checkbox from './Checkbox';

    export default {
      components: {
        Button,
        Range,
        Checkbox
      },
      data: function() {
        return {
          maxPositionX: null,
          maxPositionY: null
        }
      },
      mounted: function() {
        this.maxPositionX = window.innerWidth - 1;
        this.maxPositionY = window.innerHeight - 1;
      }
    }
</script>

<style module lang="scss">
    .toolbar {
        position: fixed;
        top: 1rem;
        right: 1rem;
        background-color: $white;
        padding: 1rem;
        border-radius: 0.25rem;
        width: 375px;
        box-shadow: 0 4px 6px -1px rgba($black, 0.1), 0 2px 4px -1px rgba($black, .05);
        opacity: 0;
        pointer-events: none;
        transition: 0.2s opacity ease-in-out;

        &.toolbarActive {
            opacity: 1;
            pointer-events: auto;
        }
    }

    .title {
        font-size: 2rem;
    }

    .closeButton {
        width: 100%;
        display: block;
    }
</style>