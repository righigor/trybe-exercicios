from typing import Union, List, Dict
from src.insights.jobs import ProcessJobs


class ProcessSalaries(ProcessJobs):
    def __init__(self):
        super().__init__()

    def get_max_salary(self) -> int:
        max_salary = []
        for job in self.jobs_list:
            salary = job["max_salary"]
            if salary and salary.isdigit():
                max_salary.append(int(salary))
        return max(max_salary)

    def get_min_salary(self) -> int:
        min_salary = []
        for job in self.jobs_list:
            salary = job["min_salary"]
            if salary and salary.isdigit():
                min_salary.append(int(salary))
        return min(min_salary)

    def matches_salary_range(self, job: Dict, salary: Union[int, str]) -> bool:
        if (
            "max_salary" not in job
            or "min_salary" not in job
            or not str(job["max_salary"]).isdigit()
            or not str(job["min_salary"]).isdigit()
            or job["min_salary"] > job["max_salary"]
        ):
            raise ValueError("Invalid salary range")
        if not isinstance(salary, int) and (
            not isinstance(salary, str) or not salary.isdigit()
        ):
            raise ValueError("Invalid salary")
        return job["min_salary"] <= int(salary) <= job["max_salary"]

    def filter_by_salary_range(
        self, jobs: List[dict], salary: Union[str, int]
    ) -> List[Dict]:
        pass
