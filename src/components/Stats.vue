<template>
    <div :class="$style.stats">
        <table>
            <tbody>
            <tr>
                <th>Velocity X</th>

                <td>
                    {{ $store.state.velocityX }}
                </td>
            </tr>

            <tr>
                <th>Velocity Y</th>

                <td>
                    {{ $store.state.velocityY }}
                </td>
            </tr>

            <tr>
                <th>Position X</th>

                <td>
                    {{ $store.state.positionX }}
                </td>
            </tr>

            <tr>
                <th>Position Y</th>

                <td>
                    {{ $store.state.positionY }}
                </td>
            </tr>

            <tr>
                <th>Wall Count</th>

                <td>
                    {{ $store.state.wallCount }}
                </td>
            </tr>

            <tr>
                <th>Corner Count</th>

                <td>
                    {{ $store.state.cornerCount }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style module lang="scss">
    .stats {
        background-color: rgba($white, 0.6);
        padding: 1rem;
        border-radius: 0.25rem;
        color: $black;
        box-shadow: 0 4px 6px -1px rgba($black, 0.1), 0 2px 4px -1px rgba($black, .05);
    }
</style>