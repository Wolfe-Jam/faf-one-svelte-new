export type SixWs = {
	who?: string;
	what?: string;
	why?: string;
	where?: string;
	when?: string;
	how?: string;
};

const KEYS = ['who', 'what', 'why', 'where', 'when', 'how'] as const;

function yamlScalar(value: string): string {
	return JSON.stringify(value);
}

/** YAML fragment only — six keys under human_context. Does not save a file. */
export function fill6wsYaml(input: SixWs): string {
	const lines = ['human_context:'];
	for (const key of KEYS) {
		lines.push(`  ${key}: ${yamlScalar(input[key] ?? '')}`);
	}
	return lines.join('\n') + '\n';
}

export function sixWsFromForm(form: FormData): SixWs {
	const read = (key: string) => String(form.get(key) ?? '');
	return {
		who: read('who'),
		what: read('what'),
		why: read('why'),
		where: read('where'),
		when: read('when'),
		how: read('how')
	};
}
