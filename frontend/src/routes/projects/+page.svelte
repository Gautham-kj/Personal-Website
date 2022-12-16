<script lang="ts">
    import {browser} from "$app/environment";
    import Navbar from "../../Components/Navbar.svelte";
    let darkMode:boolean;
    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>


<div  class="h-screen z-0  w-full dark:bg-black bg-blue-500 text-white absolute">
    <Navbar bind:darkMode/>
</div>