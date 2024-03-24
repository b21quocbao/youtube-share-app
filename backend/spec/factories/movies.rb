FactoryBot.define do
  factory :movie do
    title { "test" }
    like { 200 }
    dislike { 10 }
    description { "description" }
    association :user
  end
end
