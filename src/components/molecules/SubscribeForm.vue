<template>
  <div class="max-w-[408px]">
    <h4 class="text-white">
      {{ t('newsletter.title') }}
    </h4>
    <form name="form-subscription" @submit.prevent="sendSubscriptionEmail" class="flex gap-2 items-stretch">
      <input
          ref="subscribe-form"
          class="flex-1 bg-transparent border border-anc-accent-light placeholder:text-[#ADADAD] placeholder:italic placeholder:font-light p-2 text-xs outline-none"
          :placeholder="t('newsletter.placeholder')"
          autocomplete="off"
          type="email"
          v-model="data.email"
          required
      />
      <button class="bg-anc-primary text-white p-2 px-4 btn-send-form" :disabled="sendingEmail">
        {{ t('newsletter.button') }}
      </button>
    </form>
  </div>
</template>
<script>
import { useTranslations } from '../../i18n/utils';

export default  {
  data() {
    return {
      data: {
        email: '',
      },
      sendingEmail: false,
      lang: 'es',
      t: () => {}
    }
  },
  mounted() {
    this.getLang();
  },
  methods: {
    useTranslations,
    getLang() {
      const arrayUrl = window.location.pathname.split('/');
      this.lang = arrayUrl[1];
      this.t = this.useTranslations(this.lang);
    },
    async sendSubscriptionEmail() {
      this.sendingEmail = true;
      try {
        const response = await fetch(`/.netlify/functions/triggerSubscribeEmail`, {
          method: 'POST',
          body: JSON.stringify(this.data),
        });
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error("Not 2xx response", {cause: response});
        } else {
          this.data.email = '';
          swal(this.t('newsletter.success'));
        }
      } catch (error) {
        // swal('No pudimos suscribirte', 'error')
        swal({
          toast: true,
          text: this.t('newsletter.error'),
          icon: 'error',
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 5000,
        });
      }
      this.sendingEmail = false;
    }
  }
}
</script>
