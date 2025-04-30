import { Wrapper, DatesWrapper, DatesTitle } from "../styles";
import { Title } from "../../../shared/ui";
import { locale } from "../locale";

function HistoryDates() {
  return (
    <Wrapper>
      <Title>{locale.title}</Title>

      <DatesWrapper>
        <DatesTitle>{locale.yaerStart}</DatesTitle>
        <DatesTitle>{locale.yearEnd}</DatesTitle>
      </DatesWrapper>
    </Wrapper>
  );
}

export default HistoryDates;
