def study_schedule(permanence_period, target_time):
    studens = 0
    if not target_time:
        return None
    for i in permanence_period:
        if type(i[0]) is not int or type(i[1]) is not int:
            return None
        if i[0] <= target_time <= i[1]:
            studens += 1
    return studens
