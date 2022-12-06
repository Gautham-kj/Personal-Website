<script lang="ts">
	import Navbar from "../Components/Navbar.svelte";
    let darkmode=true
</script>

<div class:darkmode class="{darkmode?"dark":""}">
    <Navbar bind:darkmode />
    <div class="h-screen w-screen z-0">
        <main class="bg-black h-full w-full border-2 border-blue-500 dark:bg-white"></main>
    </div>
</div>