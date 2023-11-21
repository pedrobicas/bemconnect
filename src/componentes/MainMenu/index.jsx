import * as S from "./styles";

export default function MainMenu({ text }) {
	return (
		<S.Container>
			<S.Text>{text}</S.Text>
		</S.Container>
	);
}
