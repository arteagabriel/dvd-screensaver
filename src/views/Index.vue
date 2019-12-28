<template>
    <div>
        <Screensaver />

        <Toolbar />
    </div>
</template>

<script>
    import Screensaver from '../components/Screensaver';
    import Toolbar from '../components/Toolbar';

    export default {
      components: {
        Screensaver,
        Toolbar
      }
    }
</script>
