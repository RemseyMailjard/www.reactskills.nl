import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  Field,
  Radio,
  RadioGroup,
  Text,
  Title3,
  makeStyles,
  tokens,
  Badge,
} from '@fluentui/react-components';
import { BrainCircuitRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground2,
    padding: '24px',
  },
  card: {
    width: '500px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  answers: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  resultBox: {
    padding: '12px',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

function App() {
  const styles = useStyles();

  const [selected, setSelected] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "B";

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <main className={styles.page}>
      <Card className={styles.card}>
        <CardHeader
          image={<BrainCircuitRegular fontSize={24} />}
          header={<Title3>AI Knowledge Check</Title3>}
        />

        <Text>
          What is the main benefit of using context in AI prompts?
        </Text>

        <Field>
          <RadioGroup
            value={selected}
            onChange={(_, data) => setSelected(data.value)}
            className={styles.answers}
          >
            <Radio value="A" label="Faster internet speed" />
            <Radio value="B" label="Better and more accurate output" />
            <Radio value="C" label="More storage in Azure" />
          </RadioGroup>
        </Field>

        <Button appearance="primary" onClick={handleSubmit}>
          Submit answer
        </Button>

        {submitted && (
          <div className={styles.resultBox}>
            {isCorrect ? (
              <>
                <Badge color="success">Correct 🎉</Badge>
                <Text> Context improves the quality of AI responses.</Text>
              </>
            ) : (
              <>
                <Badge color="danger">Incorrect</Badge>
                <Text> The correct answer is B.</Text>
              </>
            )}
          </div>
        )}
      </Card>
    </main>
  );
}

export default App;