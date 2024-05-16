<template>
  <div class="bg-white rounded responsive-container-form h-full w-2/4 mx-auto">
    <form>
      <div
        class="flex flex-col items-center justify-center pt-6 cursor-default responsive-container-form-header"
      >
        <img src="../../assets/images/o.svg" alt="O" />
        <span class="text-pink-600 text-xl font-semibold mt-2"
          >Acesse o Orkut
        </span>
      </div>
      <div
        class="flex flex-col w-full justify-center items-center mt-7 gap-4 responsive-container-inputs"
      >
        <input
          type="text"
          placeholder="Nome"
          class="w-3/4 bg-slate-200 py-2 px-3 rounded border-none text-stone-500 focus:outline-pink-200 focus:ring-transparent"
        />
        <input
          type="email"
          placeholder="E-mail"
          class="w-3/4 bg-slate-200 py-2 px-3 rounded border-none text-stone-500 focus:outline-pink-200 focus:ring-transparent"
        />
        <input
          type="password"
          placeholder="Senha"
          class="w-3/4 bg-slate-200 py-2 px-3 rounded border-none text-stone-500 focus:outline-pink-200 focus:ring-transparent"
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          class="w-3/4 bg-slate-200 py-2 px-3 rounded border-none text-stone-500 focus:outline-pink-200 focus:ring-transparent"
        />
      </div>
      <div class="w-full flex flex-col items-center justify-center gap-5 mt-8">
        <NuxtLink to="/">
          <button
            class="bg-pink-500 px-16 py-2 text-center rounded text-white font-semibold text-md flex items-center hover:bg-pink-400 transition duration-300 ease-in-out"
          >
            Criar conta
          </button>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
