Rails.application.routes.draw do
  root to: "home#index"
  mount DomainStatus::Engine => "/domain_status"
end
