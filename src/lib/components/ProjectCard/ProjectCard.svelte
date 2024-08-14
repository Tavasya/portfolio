<script lang="ts">
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;
	
</script>

<Card color={project.color} href={`${base}/projects/${project.slug}`}>
	<CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>

	<div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
		<CardDivider />
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-time" classes="text-1.25em" />
			<p>{project.period}</p>
			
		</div>
		<CardDivider />
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{project.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">

	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each project.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
				href={`${base}/skills/${tech.slug}`}
			/>
		{/each}
	</div>


	
</Card>
