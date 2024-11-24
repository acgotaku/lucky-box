import { useCallback, useState } from 'react';
import { Button, Dialog, Flex, TextArea } from '@radix-ui/themes';
import { Card } from '@/components';
import styles from './home.module.css';

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const HomeView = () => {
  const [rawNumbers, setRawNumbers] = useState<string>('');
  const [nums, setNums] = useState<string[]>([]);

  const saveNumbers = useCallback(() => {
    const numbers = rawNumbers
      .split(' ')
      .map(x => x.trim())
      .filter(x => x);

    setNums(shuffleArray(numbers));
  }, [rawNumbers, setNums]);

  const resetNumbers = useCallback(() => {
    setRawNumbers('');
    setNums([]);
  }, [setNums]);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Lucky Box</h1>
      <div className={styles.intro}>
        <p className={styles.desc}>请输入抽选号码，以空格分隔</p>
        <TextArea
          placeholder="1 2 3"
          radius="medium"
          className={styles.textarea}
          value={rawNumbers}
          onChange={e => setRawNumbers(e.target.value)}
        />
        <div className={styles.actions}>
          <Button size="3" onClick={saveNumbers}>
            抽选
          </Button>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button size="3">重置</Button>
            </Dialog.Trigger>
            <Dialog.Content className={styles.dialog}>
              <p>确定要重置抽选号码么？</p>
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    取消
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button onClick={resetNumbers}>确定</Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
      {nums.length > 0 && (
        <>
          <p className={styles.cardsTitle}>开始翻牌子吧~</p>
          <div className={styles.cards} key={nums.join('')}>
            {nums.map((num, index) => (
              <Card key={index} className={styles.card} number={num} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeView;
