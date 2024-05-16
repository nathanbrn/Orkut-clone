<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);

const dbAuth = {
  users: [
    {
      id: 1,
      name: "João",
      email: "joao@mail.com",
      password: "123456",
    },
    {
      id: 1,
      name: "Breno",
      email: "breno@mail.com",
      password: "654321",
    },
    {
      id: 1,
      name: "Victoria",
      email: "victoria@mail.com",
      password: "852456",
    },
  ],
};

function handleLogin() {
  loading.value = true;

  const user = {
    email: email.value,
    password: password.value,
  };

  const userExists = dbAuth.users.find(
    (u) => u.email === user.email && u.password === user.password
  );

  if (userExists) {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    router.push("/home");
  } else {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    console.error("Usuário não encontrado");
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between">
    <header
      class="h-24 bg-white flex items-center justify-between responsive-header px-64 border"
    >
      <div class="w-28 p-1">
        <span class="text-3xl font-bold text-pink-600 cursor-default"
          >Orkut</span
        >
      </div>
      <div class="flex items-center gap-6">
        <div>
          <NuxtLink to="/about">Sobre o orkut</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/security">Centro de segurança</NuxtLink>
        </div>
      </div>
    </header>
    <main class="w-full h-auto px-64 responsive-main">
      <div class="flex items-center gap-5">
        <div>
          <img
            src="../assets/images/banner.png"
            width="600"
            alt="Banner"
            class="object-cover responsive-banner"
          />
        </div>
        <div class="bg-white h-450px w-96 rounded responsive-container-form">
          <form>
            <div
              class="flex flex-col items-center justify-center pt-6 cursor-default responsive-container-form-header"
            >
              <img src="../assets/images/o.svg" alt="O" />
              <span class="text-pink-600 text-xl font-semibold mt-2"
                >Acesse o Orkut
              </span>
            </div>
            <div
              class="flex flex-col w-full justify-center items-center mt-7 gap-4 responsive-container-inputs"
            >
              <input
                type="email"
                placeholder="E-mail"
                class="w-3/4 bg-slate-200 py-2 px-3 rounded border-none text-stone-500 focus:outline-pink-200 focus:ring-transparent"
                v-model="email"
              />
              <input
                type="password"
                placeholder="Senha"
                class="w-3/4 bg-slate-200 py-2 px-3 rounded border-none text-stone-500 focus:outline-pink-200 focus:ring-transparent"
                v-model="password"
              />
            </div>
            <div
              class="flex items-center mx-12 mt-5 gap-1 responsive-container-checkbox"
            >
              <input
                type="checkbox"
                name="rememberPassword"
                checked
                class="w-4 h-4 rounded-full"
              />
              <span
                class="text-stone-500 text-xs cursor-default"
                id="remeberPassword"
                >Lembrar minha senha</span
              >
            </div>
            <div
              class="w-full flex flex-col items-center justify-center gap-5 mt-8"
            >
              <button
                type="button"
                @click="handleLogin"
                class="bg-pink-500 px-16 py-2 text-center rounded text-white font-semibold text-md flex items-center hover:bg-pink-400 transition duration-300 ease-in-out"
              >
                <span v-if="!loading">Entrar na conta</span>
                <span v-else>Carregando...</span>
              </button>
              <NuxtLink to="/createAccount">
                <button
                  type="button"
                  class="bg-pink-500 px-16 py-2 text-center rounded text-white font-semibold text-md flex items-center hover:bg-pink-400 transition duration-300 ease-in-out"
                >
                  Criar uma conta
                </button>
              </NuxtLink>
            </div>
            <div class="w-full flex items-center justify-center my-5">
              <a
                href="/recoveryPassword"
                class="text-xs text-decoration-underline text-pink-600 hover:text-pink-400 transition duration-300 ease-in-out cursor-pointer"
                >Esqueci minha senha</a
              >
            </div>
          </form>
        </div>
      </div>
    </main>
    <footer class="h-12 bg-white flex items-center justify-center">
      <span class="text-sm font-semibold text-pink-500"
        >Todos os direitos reservados</span
      >
    </footer>
  </div>
</template>
