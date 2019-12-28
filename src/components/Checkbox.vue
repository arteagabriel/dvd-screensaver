<template>
    <label :class="$style.label" :checked="$store.state.statsActive" @change="$store.commit('toggleStats')">
        <div :class="$style.checkboxWrapper">
            <input type="checkbox" :class="$style.checkbox" />
        </div>

        <slot />
    </label>
</template>

<style module lang="scss">
    .label {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .checkboxWrapper {
        position: relative;
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .checkbox {
        width: 20px;
        height: 20px;
        border-radius: 0.25rem;
        border: 1px solid $dark;
        background-color: transparent;
        cursor: pointer;
        appearance: none;
        box-shadow: 0 0 0 0 $dark inset;
        transition: all 0.2s ease-in-out;

        &:focus {
            outline: none;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            transform: scale(0.2);
            transition: all .2s ease-in-out;
            opacity: 0;
            background-image: url('../assets/images/check.svg');
            background-size: 16px;
            background-position: center;
        }

        &:checked {
            box-shadow: 0 0 0 10px $dark inset;

            &::after {
                transform: scale(1);
                opacity: 1;
            }
        }
    }
</style>
