<script lang="ts">
    import Navbar from "../../Components/Navbar.svelte";
    let darkmode:boolean=true
</script>

<Navbar bind:darkmode/>
<div class="h-screen z-0 bg-black text-white absolute">
    test
</div>