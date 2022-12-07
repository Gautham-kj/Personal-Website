<script lang="ts">
	import Navbar from "../Components/Navbar.svelte";
    let darkmode:boolean;
    let frontmount="src/lib/images/frontmount.svg";
    let backmount="src/lib/images/backmount.svg";
    let sky="src/lib/images/sky.svg";

</script>

<div class:darkmode class="{darkmode?"dark":""}">
    <Navbar bind:darkmode />
    <div class="h-screen w-screen">
        <main class=" h-full w-full overflow-x-hidden overflow ">
            <span>
                <img src={sky} alt="sky" class="w-full overflow-hidden z-0 absolute"/>
                <img src={backmount} alt="backmountain" class="w-full overflow-hidden z-1 absolute"/>
                <img src={frontmount} alt="frontmountain" class="w-full overflow-hidden z-2 absolute"/>
            </span>
        </main>
    </div>
</div>