class FriendshipsController < ApplicationController
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      p "===================="
      p "YAY!"
      p "===================="
    else
      p "===================="
      p "AWW!"
      p "===================="
    end
  end

  def destroy
    @friendship = current_user.friendships.find(params[:friend_id])
    @friendship.destroy
    p "===================="
    p "Destroyed Friendship :("
    p "===================="
  end
end
