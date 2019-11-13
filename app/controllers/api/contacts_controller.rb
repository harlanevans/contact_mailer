class Api::ContactsController < ApplicationController

  def contact 
    ContactsMailer.contact_user(params[:contact][:firstName], params[:contact][:email] ).deliver
  end

  private
    def contact_params 
      params.require(:contact).permit(:firstName, :email)
    end
end
