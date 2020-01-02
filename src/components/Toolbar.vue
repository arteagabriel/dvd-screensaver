<template>
    <aside :class="[$style.toolbar, { [$style.toolbarActive]: $store.state.toolbarActive }]">
        <h1 :class="$style.title">Options</h1>

        <Range
            :max="25"
            :value="parseInt($store.state.velocityX)"
            :id="'velocityX'"
            @range-input="event => $store.commit('setVelocityX', parseInt(event.target.value))"
        >
            Velocity X
        </Range>

        <Range
            :max="25"
            :value="parseInt($store.state.velocityY)"
            :id="'velocityY'"
            @range-input="event => $store.commit('setVelocityY', parseInt(event.target.value))"
        >
            Velocity Y
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