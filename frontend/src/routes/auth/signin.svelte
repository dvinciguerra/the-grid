<GoogleAuth clientId="your-google-auth-client-id" on:auth-success={e => console.dir(e.detail.user)} />

<script>
  import { GoogleAuth } from '@beyonk/svelte-social-auth'
</script>
