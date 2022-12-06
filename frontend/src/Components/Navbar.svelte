<script lang="ts">
    let logstatus = true;
    export let darkmode:boolean
</script>

<nav class="{darkmode?"dark":""}">
    <div class="flex items-center justify-between mx-auto border-2 border-white bg-white dark:bg-black">
        <!-- Logo and Site Name -->
        <div class="flex items-center p-4 dark:hover:fill-white dark:fill-green-500  hover:fill-black fill-green-300">
            <a href="/">
                <button class="flex space-x-3 fill-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" class=" fill-inherit"><path d="m8.917 32.375 3.208-1.333q-.375-1.042-.667-2.125-.291-1.084-.416-2.25l-2.125 1.416Zm7.583-2.042h7.042q.833-2.583 1.27-4.729.438-2.146.438-4.104 0-4.333-1.188-7.729Q22.875 10.375 20 7.292q-2.875 3.083-4.062 6.479-1.188 3.396-1.188 7.729 0 1.958.438 4.104.437 2.146 1.312 4.729Zm3.5-9.166q-1.208 0-1.979-.771-.771-.771-.771-2.021 0-1.167.771-1.958.771-.792 1.979-.792 1.208 0 1.979.792.771.791.771 1.958 0 1.25-.771 2.021-.771.771-1.979.771Zm11.083 11.166v-4.25L29 26.667q-.167 1.166-.458 2.25-.292 1.083-.667 2.125ZM20 .875q5.125 4.5 7.417 9.5 2.291 5 2.291 10.75v.667l3.875 2.583q.917.625 1.438 1.583.521.959.521 2.084v10.833l-10.209-4.083H14.667L4.458 38.875V28.042q0-1.125.521-2.084Q5.5 25 6.458 24.375l3.875-2.583v-.542q0-5.833 2.313-10.854Q14.958 5.375 20 .875Z"/></svg>
                    <h1 class="text-4xl font-bold text-green-500 font-avarabold">
                        No_Name
                    </h1>
                </button>
            </a>
        </div>
        <!-- Navigation Buttons -->
        <div class="flex pr-6 space-x-6 text-xl font-avarabold text-green-500  items-center ">
            <button class="dark:hover:text-white hover:text-black" >
                Home
            </button>
            <button class="dark:hover:text-white hover:text-black">
                About
            </button >
            <button class="dark:hover:text-white hover:text-black">
                Projects
            </button>
            <!-- Darkmode Button -->
            {#if darkmode==true}
                <button on:click={()=>(darkmode= !darkmode)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6 hover:fill-yellow-400">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>  
            </button>
            {:else}
                    <button on:click={()=>(darkmode= !darkmode)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="purple" class="w-6 h-6 hover:fill-black">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                        </svg>                
                    </button>
            {/if}
        </div>
    </div>
</nav>