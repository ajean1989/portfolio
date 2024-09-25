<script setup>
    import IconLinkedIn from './icons/IconLinkedIn.vue'
    import IconGithub from './icons/IconGithub.vue'
</script>

<template>

    <footer className="w-screen h-36 mt-20 overflow-hidden">
      <div id="footer-style">
        <div className="flex flex-col items-center font-custom1">
          <ul className="flex w-1/12 justify-evenly">
            <li>
                <a href="https://www.linkedin.com/in/adrien-jacquenet-4a279b261/" target="_blank">
                    <IconLinkedIn />
                </a>
            </li>
            <li>
                <a href="https://github.com/ajean1989" target="_blank">
                    <IconGithub />
                </a>
            </li>
          </ul>
          <p className="text-[#515d64]">
            ©2024 Adrien Jacquenet, All rights reserved.
          </p>
        </div>
      </div>
    </footer>

</template>

<style>

    #footer-style{
        position: relative;
        width: 400vw;
        height: 400vw;
        right: 150vw;
        border-radius: 100%;
        padding-top: 2em;
        background-color:#2e3445;
    }

    .footer-icone{
        background-color: #81c7bc;
        border-radius: 100%;
        width : 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-svg path{
    background-color: #332222;
    }

    .anim1{
        animation: easeInOutAnimation 3s ease-in-out infinite;
    }

    .anim2{
        animation: easeInOutAnimation 2s ease-in-out infinite;
    }

    @keyframes easeInOutAnimation  {
        from {
            transform: translateY(0)
        }

        50% {
            transform: translateY(5px)
        }

        to {
            transform: translateY(0)
        }
    }

</style>