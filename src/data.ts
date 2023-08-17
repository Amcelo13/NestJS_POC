export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
interface Data {
    report: {
      id: string;
      source: string;
      amount: number;
      created_at: Date;
      updated_at: Date;
      type: ReportType;
    }[];
  }

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'FOOD',
      amount: 2000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid',
      source: 'salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

data.report.push({
  id: 'uuid',
  source: 'salary',
  amount: 1000,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
})


data.report.push({
  id: 'uuid1',
  source: 'home',
  amount: 2000,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
});


data.report.push({
  id: 'uuid1',
  source: 'FOOD',
  amount: 2000,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.EXPENSE,
});
