<script lang="ts">
	import Navbar from "../Components/Navbar.svelte";
    import ProjectDetails from "../Components/ProjectDetails.svelte";
    import Bottom from "../Components/Bottom.svelte";
    let darkmode:boolean;
    let frontmount="src/lib/images/frontmount.svg";
    let backmount="src/lib/images/backmount.svg";
    let sky="src/lib/images/sky.svg";
    let Realmoon="src/lib/images/RealMoon.svg";
    let RealSun= "src/lib/images/RealSun.svg";
    let scroll:number;
    let width:number;
    let height:number;
</script>
<svelte:window bind:scrollY={scroll} bind:innerWidth={width} bind:innerHeight={height}/>
<body class="bg-mainbg">
    <div class:darkmode class="{darkmode?"dark":""} bg-mainbg " >
        <Navbar bind:darkmode />
        <div class="w-screen " style:height={`${0.5625*width}`}>
            <div class=" w-full overflow-x-hidden bg-blue-400">
                    <img src={sky} alt="sky" class="w-full dark:visible invisible overflow-hidden z-8 absolute bg-nightsky" style:transform={`translate3d(0,-${scroll*0.3}px,0)`}/>
                    <img src={backmount} alt="backmountain" class="w-full  transform overflow-hidden dark:bg-transparent bg-blue-400 z-1 absolute" />
                    <div class="flex w-full pt-10 md:py-24 absolute overflow-hidden">
                        {#if darkmode}
                            <img src={Realmoon} alt="Moon" class="flex py-4 w-20 md:w-40 overflow-hidden " style:transform={`translate3d(${scroll*1.3}px,0,0)`}/>
                        {:else}
                            <img src={RealSun} alt="Sun" class=" w-40 md:w-80 items-end overflow-hidden" style:transform={`translate3d(${(width*0.75-scroll*2)}px,0,0)`}/>
                        {/if}
                    </div>
                    <img src={frontmount} alt="frontmountain" class="w-full  overflow-x-hidden absolute z-3" />  
            </div>
        </div>
    </div>
    <div class="pt-8 p-4 bg-mainbg " id="about" style:transform={`translate3d(0,${0.5625*width-5}px,0)`}>
        <ProjectDetails/>
    </div>
    <h1>{height}</h1>
</body>
<!-- <div class="h-80 w-80 bg-white" style:transform={`translate3d(0,${height*1.05}px,0)`}>
    <Bottom/>
</div> -->
