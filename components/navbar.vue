<template>
  <header
    class="h-24 bg-white flex items-center justify-between responsive-header px-52 border gap-8"
  >
    <div class="w-28 p-1 flex gap-8">
      <span class="text-3xl font-bold text-pink-600 cursor-default">Orkut</span>
      <div class="lg:flex hidden items-center gap-6">
        <div>
          <NuxtLink to="/about">Inicio</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/about">Perfil</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/about">Comunidades</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/about">Jogos</NuxtLink>
        </div>
      </div>

      <div class="lg:flex hidden gap-6">
        <input
          class="border border-gray-100 rounded bg-gray-100 px-11 py-1 input-icon"
          type="text"
          placeholder="Pesquisar no Orkut"
        />

        <div class="flex items-center justify-center w-52 gap-2 cursor-default">
          <img src="" alt="perfil" class="border rounded-full w-8 h-8 cursor-pointer" />
          <span class="text-sm">Victoria Aparecida</span>
          <img src="/assets/images/icone-down.svg" alt="icone down" class="cursor-pointer" />
        </div>
      </div>
      <div class="lg:hidden flex gap-6">
        <div class="flex items-center justify-center w-20">
          <img src="" alt="perfil" class="border rounded-full w-8 h-8 cursor-pointer" />
          <img src="/assets/images/icone-down.svg" alt="icone down" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.input-icon {
  background-image: url("/assets/images/search.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left 10px center;
}
</style>
