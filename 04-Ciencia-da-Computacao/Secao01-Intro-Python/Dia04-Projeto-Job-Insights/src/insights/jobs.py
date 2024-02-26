from typing import List, Dict
import csv


class ProcessJobs:
    def __init__(self) -> None:
        self.jobs_list = list()

    def read(self, path) -> List[Dict]:
        with open(path, encoding="utf-8") as file:
            read_data = csv.DictReader(file, delimiter=",")
            for row in read_data:
                self.jobs_list.append(row)

    def get_unique_job_types(self) -> List[str]:
        job_types = list()
        for job in self.jobs_list:
            job_types.append(job["job_type"])
        return list(set(job_types))

    def filter_by_multiple_criteria(
            self, jobs: List[Dict], filter_criteria: dict) -> List[dict]:
        result = []
        for job in jobs:
            if (
                job["industry"] == filter_criteria["industry"]
                and job["job_type"] == filter_criteria["job_type"]
            ):
                result.append(job)
        return result
