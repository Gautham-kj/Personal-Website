<script lang="ts">
    import Navbar from "../../Components/Navbar.svelte";
    let darkmode:boolean;
</script>


<div  class="h-screen z-0 bg-black w-full dark:bg-blue-500 text-white absolute">
    <Navbar bind:darkmode/>
</div>