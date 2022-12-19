import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '../lib/supabase'

const Dictionary: React.FC = () => {
  const [words, setWords] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getDictionary = async () => {
      const { data } = await supabase.from('db-dictionary').select('word, meanings');
      setWords(data.map((row: any) => row.word));
      setMeanings(data.map((row: any) => row.meaning));
    }
    getDictionary();
  }, []);

  return (
    <div>
      {words.map((word, index) => (
        <div key={word}>
          <div
            onMouseEnter={() => setMeanings(meanings.map((meanings, i) => (i === index ? meanings : '')))}
            onMouseLeave={() => setMeanings(meanings.map((meaning, i) => ''))}
            onClick={() => setMeanings(meanings.map((meanings, i) => (i === index ? meanings : '')))}
          >
            {word}
          </div>
          <div>{meanings[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
