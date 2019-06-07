<script>
  import { stores } from '@sapper/app';
	const { session } = stores();
</script>

<style>
</style>

<h3>Hey, {$session.firstName}!</h3>

<p>Let's set up cool things.</p>
