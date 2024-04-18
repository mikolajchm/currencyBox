import { render, screen, cleanup } from '@testing-library/react';
import { toHaveTextContent } from '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    const testCases = [
        { amount: '100', from: 'PLN', to: 'USD', expectedText: 'PLN 100.00 = $28.57' },
        { amount: '20', from: 'USD', to: 'PLN', expectedText: '$20.00 = PLN 70.00' },
        { amount: '200', from: 'PLN', to: 'USD', expectedText: 'PLN 200.00 = $57.14' },
        { amount: '345', from: 'USD', to: 'PLN', expectedText: '$345.00 = PLN 1,207.50' },
      ];
    
    
    for(const testObj of testCases) {
        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

            const resultField = screen.getByTestId('result');

            expect(resultField).toHaveTextContent(testObj.expectedText);
            cleanup();
        });
    }

    const testCasesPLN = [
        { amount: '100', from: 'PLN', to: 'PLN', expectedText: 'PLN 100.00 = PLN 100.00' },
        { amount: '20', from: 'PLN', to: 'PLN', expectedText: 'PLN 20.00 = PLN 20.00' },
        { amount: '200', from: 'PLN', to: 'PLN', expectedText: 'PLN 200.00 = PLN 200.00' },
        { amount: '345', from: 'PLN', to: 'PLN', expectedText: 'PLN 345.00 = PLN 345.00' },
      ];
    
    for(const testCasePLN of testCasesPLN){
        it('should render proper info when from and to are the same', () => {
            render(<ResultBox from={testCasePLN.from} to={testCasePLN.to} amount={parseInt(testCasePLN.amount)} />);
            const resultField = screen.getByTestId('result');

            expect(resultField).toHaveTextContent(testCasePLN.expectedText);
            cleanup();
        });
    }

    const testCasesMinus = [
        { amount: '-100', from: 'USD', to: 'PLN'},
        { amount: '-20', from: 'USD', to: 'PLN'},
        { amount: '-200', from: 'PLN', to: 'USD'},
        { amount: '-345', from: 'USD', to: 'PLN'},
      ];

      for(const testCaseMinus of testCasesMinus){
        it('should render proper info when from and to are the same', () => {
            render(<ResultBox from={testCaseMinus.from} to={testCaseMinus.to} amount={parseInt(testCaseMinus.amount)} />);
    
            const output = screen.getByTestId('wrongValue');
        
            expect(output).toHaveTextContent(`Wrong value...`);
            cleanup();
        });
    }
});

