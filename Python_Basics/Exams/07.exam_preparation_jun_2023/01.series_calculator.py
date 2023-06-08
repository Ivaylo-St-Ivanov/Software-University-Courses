series_name = input()
seasons_count = int(input())
episodes_count = int(input())
ad_free_duration_per_episode = float(input())

#  Във всеки епизод има реклами, които са с продължителност 20% от времето на един епизод.
ads_duration = ad_free_duration_per_episode * 0.2

#  Също така знаете, че всеки сезон завършва със специален епизод, който е с 10м по-дълъг от обичайното.
last_episode_bonus_duration = 10

total_time = seasons_count * (episodes_count * (ad_free_duration_per_episode + ads_duration) + last_episode_bonus_duration)

print(f'Total time needed to watch the {series_name} series is {int(total_time)} minutes.')
