<script lang="ts" context="module">
	import type { BlogPost } from '$lib/types';
	import { pathToSlup } from '$lib/utils';

	const postsModules = import.meta.glob('./*.{md,svx}');
	let postPromises: { [key: string]: any }[] = [];

	for (let [path, resolver] of Object.entries(postsModules)) {
		const promise = resolver().then((post) => {
			return [pathToSlup(path), post.metadata];
		});
		postPromises.push(promise);
	}
	/** @type {import('./__types/[slug]').Load} */
	export async function load() {
		const postsArray = await Promise.all(postPromises);
		const posts: BlogPost[] = postsArray.map((p): BlogPost => {
			return { path: `blog/${p[0]}`, metadata: p[1] };
		});
		console.log(posts);

		return {
			props: {
				posts: posts
			}
		};
	}
</script>

<script lang="ts">
	export let posts: BlogPost[];
</script>

<h1>Blog</h1>

{#each posts as p}
	<div class="row">
		<a href={p.path}>{p.metadata.title}</a>
		<p class="small">{p.metadata.description}</p>
	</div>
{/each}
