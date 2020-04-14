import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}

class ReportTransactionService {
  private transactionRepository: TransactionsRepository;

  constructor(transactionRepository: TransactionsRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute(): Request {
    const transactions = this.transactionRepository.all();
    const balance = this.transactionRepository.getBalance();

    return { transactions, balance };
  }
}

export default ReportTransactionService;
