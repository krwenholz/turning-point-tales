<script>
  import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();
</script>

<style>
</style>

<h3>Hey, {session.username}!</h3>

You successfully logged-in \o/
