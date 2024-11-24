import { useCallback, useState } from 'react';
import { Button, TextArea } from '@radix-ui/themes';
import { Card } from '@/components';
import styles from './home.module.css';

const HomeView = () => {
  const [rawNumbers, setRawNumbers] = useState<string>('');
  const [nums, setNums] = useState<string[]>([]);

  const saveNumbers = useCallback(() => {
    const numbers = rawNumbers
      .split(' ')
      .map(x => x.trim())
      .filter(x => x);
    const nums = numbers.sort(() => 0.5 - Math.random());
    setNums(nums);
  }, [rawNumbers, setNums]);

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
          <Button size="3">重置</Button>
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
