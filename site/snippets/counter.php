<div class="counter" v-cloak v-scope="Counter({ initialCount: 1 })" @vue:mounted="mounted">
  <p>
    <?= $slots->label() ?>&nbsp;{{ count }}
  </p>
  <button @click="inc">increment</button>
</div>