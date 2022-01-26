import { CurrencyCard, PageHero } from '@/components/elements';
import { AddCurrencyArea } from '@/components/modules';
import { useCryptoPrices } from '@/hooks';
import React from 'react';
import * as S from './styles';

export const HomeView = () => {
  const { cryptoCurrencies, onDeleteCryptoCurrency, onAddCryptoCurrency } =
    useCryptoPrices();

  return (
    <React.Fragment>
      <title>Home</title>

      <S.Wrapper>
        <S.HeroContainer>
          <PageHero />
          <AddCurrencyArea onAddCurrency={onAddCryptoCurrency} />
        </S.HeroContainer>
        <div>
          {cryptoCurrencies.length > 0 &&
            cryptoCurrencies.map(item => (
              <CurrencyCard
                key={item.symbol}
                currency={item.symbol}
                price={item.price}
                onDelete={() => onDeleteCryptoCurrency(item.symbol)}
              />
            ))}
        </div>
      </S.Wrapper>
    </React.Fragment>
  );
};
