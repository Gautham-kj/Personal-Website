<script lang="ts">
	import Navbar from "../Components/Navbar.svelte";
    // import ProjectDetails from "../Components/ProjectDetails.svelte";
    let darkmode:boolean;
    let frontmount="src/lib/images/frontmount.svg";
    let backmount="src/lib/images/backmount.svg";
    let sky="src/lib/images/sky.svg";
    let Realmoon="src/lib/images/RealMoon.svg";
    let scroll:number;
    let width:number;
    </script>
<svelte:window bind:scrollY={scroll} bind:innerWidth={width}/>
<div class:darkmode class="{darkmode?"dark":""} bg-mainbg" >
    <Navbar bind:darkmode />
    <div class="w-screen " style:height={`${0.5625*width}`}>
        <div class=" w-full overflow-x-hidden bg-nightsky">
                <img src={sky} alt="sky" class="w-full overflow-hidden z-8 absolute bg-nightsky" style:transform={`translate3d(0,-${scroll*0.3}px,0)`}/>
                <img src={backmount} alt="backmountain" class="w-full transform overflow-hidden z-1 absolute" />
                <div class="w-full py-16 md:py-24 absolute overflow-hidden">
                    <img src={Realmoon} alt="Moon" class="w-20 md:w-40 -z-5 transform overflow-hidden " style:transform={`translate3d(${scroll}px,0,0)`}/>
                </div>
                <img src={frontmount} alt="frontmountain" class="w-full overflow-x-hidden absolute z-3" />
                
        </div>
        
    </div>
</div>
<main class=" p-4 bg-mainbg " id="about" style:transform={`translate3d(0,${0.5625*width}px,0)`}>
            <h1 class="font-avarabold text-3xl text-white text-semibold" >
                About
            </h1>
            <br>
            <br>
            <br>
            <p class="font-avarablack text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
</main>