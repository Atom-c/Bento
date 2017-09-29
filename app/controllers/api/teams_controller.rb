class Api::TeamsController < ApplicationController
  def index
    @memberships = Membership.where(user_id: team_params[:user_id])
    @teams = []
    @memberships.each do |membership|
      @teams.push(Team.find(membership.team_id))
    end

    if !@teams.empty?
      @projects = @teams.first.projects
    else
      @projects = []
    end

    render 'api/teams/projects'
  end

  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      render 'api/teams/show'
    else
      render @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find(params[:id])

    if @team.update_attributes(team_params)
      render 'api/teams/show'
    else
      render @team.errors.full_messages, status: 422
    end
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    render 'api/teams/show'
  end

  private

  def team_params
    params.require(:team).permit(:team_name, :owner_id, :user_id, :projects)
  end
end
