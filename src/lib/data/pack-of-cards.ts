/**
 * Pack of Cards — types + typed re-export.
 *
 * ⚠️ `pack-of-cards.json` and `pack-of-cards-register.json` are MACHINE-WRITTEN.
 * Never hand-edit them. They are emitted by `build_public.py` in the card-evolution
 * pipeline, which filters private-repo rows at build time and refuses to write
 * anything that fails `verify_public.py`. To refresh: run the pipeline's
 * `refresh.sh`, review the diff, then commit the two JSON files.
 *
 * This file is the only hand-written part, and it holds no data.
 *
 * Used by:
 *   • /routes/pack-of-cards/+page.svelte        (the map + learn page)
 *   • /routes/pack-of-cards/register/+page.svelte (the deep dive)
 *   • /lib/components/PackMap.svelte · ChoiceGrid.svelte
 */
import page from './pack-of-cards.json';
import register from './pack-of-cards-register.json';

/** One rendered view of the map. `svg` is a complete <svg> element. */
export interface MapView {
	id: string;
	label: string;
	svg: string;
}

export interface KeyRow {
	card: string;
	short: string;
	/** Class tokens the swatch and the drawn line share, e.g. "hollow ard". */
	style: string;
	hollow: boolean;
}

export interface PositionRow {
	card: string;
	distance: number;
	unique: string[];
	required_count: number | null;
}

/** One card × one of the eight choices, as it stands at the latest checkpoint. */
export interface ChoiceCell {
	dim: string;
	label: string;
	/** The literal text quoted from the spec. */
	evidence: string;
	/** Permalink to the spec at the commit, anchored to the line. */
	link: string;
	note: string;
	/** Target on the register route, e.g. "a2a-agent-card-trust". */
	anchor: string;
}

export interface ChoiceCard {
	card: string;
	short: string;
	slug: string;
	spec_repo: string;
	checkpoint: string;
	date: string;
	required_count: number | null;
	cells: ChoiceCell[];
}

/** A spec change, and how long FAF took to answer it. */
export interface Receipt {
	card: string;
	spec: string;
	ref: string;
	spec_date: string;
	spec_link: string;
	spec_title: string;
	faf_date: string;
	faf_sha: string;
	faf_link: string;
	'commit says': string;
	lag_days: number;
}

export interface FafVersion {
	date: string;
	sha: string;
	/** Always present: a row without a public link is dropped at build time. */
	link: string;
	'commit says': string;
	cites: string[][];
	changes: string[];
}

export interface FafArtifact {
	card: string;
	what: string;
	repo: string;
	paths: string[];
	versions: FafVersion[];
}

export interface SpecEvent {
	spec: string;
	date: string;
	ref: string;
	title: string;
	link: string;
	state: string;
}

export interface Candidate {
	name: string;
	owner: string;
	status: string;
	reason: string;
	spec_repo: string;
	first_date: string;
	link: string;
}

export interface PackOfCards {
	as_of: string;
	map: {
		as_of: string;
		key: KeyRow[];
		views: MapView[];
		positions: PositionRow[];
		method: string[];
		counts: { checkpoints: number; quotes: number; frames: number };
		classes: string[];
	};
	choices: { dims: string[]; cards: ChoiceCard[] };
	lanes: { faf: FafArtifact[]; spec: SpecEvent[]; private_artifacts_dropped: number };
	receipts: Receipt[];
	server_json: {
		name: string;
		is_card: boolean;
		spec_repo: string;
		link: string;
		first_date: string;
		adoption: string;
		written_by: string;
		relation: string;
	};
	also_out_there: {
		groups: Record<string, Candidate[]>;
		borderline_mentions: { name: string; link: string; why: string }[];
	};
	counts: {
		cards: number;
		checkpoints: number;
		entries: number;
		linked: number;
		spec_events: number;
		public_artifacts: number;
		frames: number;
	};
}

/** Every checkpoint of every card, with the quote behind each value. */
export interface RegisterEntry {
	value: unknown;
	evidence?: string;
	link?: string;
	note?: string;
}

export interface RegisterCheckpoint {
	label: string;
	date: string;
	ref: string;
	sources: string[];
	repo?: string;
	why_checkpoint: string;
	values: Record<string, RegisterEntry>;
}

export interface RegisterCard {
	card: string;
	spec_repo: string;
	notes: string[];
	checkpoints: RegisterCheckpoint[];
}

export const pack = page as unknown as PackOfCards;
export const cardRegister = register as unknown as { cards: Record<string, RegisterCard>; as_of: string };

/** The eight choices, in the order the map compares them. */
export const DIMS = pack.choices.dims;
