<template>
    <div :class="$style.rangeGroup">
        <label :class="$style.label" :for="id">
            <slot />
        </label>

        <input
                type="range"
                :id="id"
                :class="$style.range"
                :min="min"
                :max="max"
                :step="step"
                :value="value"
                @input="handleInput($event)"
        />
    </div>
</template>

<script>
    export default {
      props: {
        min: {
          type: Number,
          default: 1
        },
        max: {
          type: Number,
          default: 100
        },
        step: {
          type: Number,
          default: 1
        },
        value: {
          type: Number,
          default: 1
        },
        id: {
          type: String,
          default: null
        }
      },
      methods: {
        handleInput: function(event) {
          this.$emit('range-input', event);
        }
      }
    }
</script>

<style module lang="scss">
    .rangeGroup {
        margin-bottom: 1rem;
    }

    .label {
        display: block;
        font-weight: $font-weight-semibold;
    }

    .range {
        display: block;
        width: 100%;
    }
</style>