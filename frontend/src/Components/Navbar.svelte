<script lang="ts">
    let logstatus = true;
    let innerWidth:number
    export let darkmode:boolean
</script>
<svelte:window bind:innerWidth/>
<nav class="{darkmode?"dark":""} z-20 absolute w-full ">
    <div class="flex items-center justify-between">
        <div class="flex items-center p-4 dark:hover:fill-white dark:fill-green-500  hover:fill-black fill-green-300">
            <a href="/">
                <button class="flex pl-3 ">
                    <button>
                        <h1 class="flex md:text-4xl text-2xl items-center font-bold dark:text-green-500 text-orange-500 font-avarabold">
                            Gautham_KJ
                        </h1>
                    </button>
                
                </button>
            </a>
        </div>
        <!-- Navigation Buttons -->
        <div class="flex pr-6 space-x-6 text-xl font-avarabold text-white  items-center ">
            <div class="hidden md:flex">
                <a href="/aboutme">
                    <button class="text-black dark:text-white hover:text-black rounded-xl border-white bg-slate-400 hover:bg-opacity-20 bg-opacity-0 p-3" >
                        About Me
                    </button >
                </a>
                <a href="/">
                    <button class="text-black dark:text-white hover:text-black rounded-xl border-white bg-slate-400 hover:bg-opacity-20 bg-opacity-0 p-3" >
                        Projects
                    </button>
                </a>
            </div>
            <!-- Darkmode Button -->
            {#if darkmode!=true}
                <button on:click={()=>(darkmode= !darkmode)} class="rounded-xl border-white bg-slate-400 hover:bg-opacity-20 bg-opacity-0 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-6 h-6 hover:fill-red-400 ">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>  
                </button>
            {:else}
                    <button on:click={()=>(darkmode= !darkmode)} class="rounded-xl border-white bg-slate-300 hover:bg-opacity-20 bg-opacity-0 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="purple" class="w-6 h-6 hover:fill-white">
                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                        </svg>                
                    </button>
            {/if}
        </div>
    </div>
</nav>