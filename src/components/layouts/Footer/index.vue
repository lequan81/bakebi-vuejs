<script setup>
import Subcribe from "./Subcribe/index.vue";
import SocialBagdes from "./SocialBagdes.vue";
import PaymentBadges from "./PaymentBadges.vue";
</script>

<template>
  <div class="relative">
    <Subcribe />

    <footer class="mt-auto bg-orange-50 w-full mx-auto p-4 sm:py-0 sm:px-16">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-4 sm:gap-y-0 mt-32 mb-8 sm:mb-2 sm:mt-20"
      >
        <div
          class="col-span-full lg:col-span-1 space-y-2 sm:space-y-4 max-w-sm"
        >
          <p class="flex-none text-2xl font-bold tracking-wide text-black">
            Bakebi
          </p>
          <p class="flex-none text-sm font-normal text-gray-800">
            Nếu bạn đối xử với một con chó như một con người, thì nó sẽ đối xử
            với bạn như một con chó.
          </p>
          <div class="flex items-center pt-2 sm:pt-0 space-x-3">
            <SocialBagdes />
          </div>
        </div>

        <div
          class="col-span-full lg:col-span-1 space-y-2 sm:space-y-4 max-w-lg"
        >
          <p class="font-semibold text-gray-900 text-lg">Giới thiệu</p>

          <p class="flex-none text-sm font-normal text-gray-800">
            Tôi gửi tình yêu cho mùa hè, nhưng mùa hè không giữ nổi. Mùa hè chỉ
            biết ra hoa, phượng đỏ sân trường và tiếng ve nỉ non trong lá. Mùa
            hè ngây ngô, giống như tôi vậy. Nó chẳng làm được những điều tôi kí
            thác. Nó để Hà Lan đốt tôi, đốt rụi. Trái tim tôi cháy thành tro,
            rơi vãi trên đường về.
          </p>
        </div>
      </div>

      <div
        class="my-2 py-2.5 gap-y-2 sm:gap-y-0 flex flex-col sm:flex-row sm:justify-between items-center border-t border-gray-300"
      >
        <p class="text-xs text-gray-800">© 2024 Bakebi Co.</p>

        <div class="flex justify-center items-center gap-x-3">
          <PaymentBadges />
        </div>
      </div>
    </footer>
  </div>
</template>
