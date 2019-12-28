<template>
    <button
        :class="[
          $style.button,
          { [$style.primary]: primary },
          { [$style.outline]: outline }
        ]"
        :is="href ? 'a': 'button'"
        :href="href"
        :target="target"
        :rel="rel"
        :type="type"
        @click="$emit('button-click')"
    >
        <slot />
    </button>
</template>

<script>
    export default {
      props: {
        href: {
          type: String,
          default: null
        },
        target: {
          type: String,
          default: null
        },
        rel: {
          type: String,
          default: null
        },
        type: {
          type: String,
          default: null
        },
        outline: {
          type: Boolean,
          default: false
        },
        primary: {
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style module lang="scss">
    .button {
        border-radius: 0.25rem;
        border: none;
        background-color: $dark;
        color: $white;
        padding: 0.5rem 1rem;
        transition: 0.2s ease-in-out;
        text-align: center;
        display: inline-block;

        &:focus {
            outline: none;
        }

        &:hover {
            background-color: darken($dark, 10%);
        }

        &.outline {
            background-color: transparent;
            border: 1px solid $dark;
            color: $dark;

            &:hover {
                background-color: $dark;
                color: $white;
            }
        }

        &.primary {
            border: none;
            background-color: $primary;

            &:hover {
                background-color: darken($primary, 10%);
            }

            &.outline {
                background-color: transparent;
                border: 1px solid $primary;
                color: $primary;

                &:hover {
                    background-color: $primary;
                    color: $white;
                }
            }
        }
    }
</style>