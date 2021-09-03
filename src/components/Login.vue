<template>
  <div class="w-full flex flex-wrap">
    <!-- Login Section -->
    <div class="container mx-auto px-6">
      <div class="grid place-items-center items-center min-h-screen">
        <!-- <div
          class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
        >
          <a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
        </div> -->

        <div
          class="flex flex-col justify-center"
        >
          <p class="text-center text-3xl">Welcome.</p>
          <form
            class="flex flex-col pt-3"
            onsubmit="event.preventDefault();"
          >
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button class="btn btn-primary mt-8">Log IN</button>
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              Don't have an account?
              <a href="register.html" class="underline font-semibold"
                >Register here.</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
