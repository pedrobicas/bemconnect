import * as S from "./styles";


export default function MainMenu({ text, url }) {
	return (
		<S.Container>
			<S.Text>{text}</S.Text>
			<S.Image src={url}></S.Image>
		</S.Container>
	);
}
