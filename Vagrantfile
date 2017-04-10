# https://www.howtoforge.com/tutorial/vagrant-ubuntu-linux-apache-mysql-php-lamp/

Vagrant.configure("2") do |config|

    config.vm.box = "precise32"

    # Mentioning the SSH Username/Password:
    config.ssh.username = "vagrant"
    config.ssh.password = "vagrant"
    config.vm.synced_folder ".", "/var/www", nfs: true, :mount_options => ["dmode=777", "fmode=666"]

    # Begin Configuring
    config.vm.define "lamp" do|lamp|
        lamp.vm.hostname = "lamp" # Setting up hostname
        lamp.vm.network "private_network", ip: "192.168.33.10" # Setting up machine's IP Address
        lamp.vm.provision :shell, inline: <<-SHELL

            # Updating repository

            sudo apt-get -y update

            # Installing Apache

            sudo apt-get -y install apache2

            # Installing MySQL and it's dependencies, Also, setting up root password for MySQL as it will prompt to enter the password during installation

            sudo debconf-set-selections <<< 'mysql-server-5.5 mysql-server/root_password password rootpass'
            sudo debconf-set-selections <<< 'mysql-server-5.5 mysql-server/root_password_again password rootpass'
            sudo apt-get -y install mysql-server libapache2-mod-auth-mysql php5-mysql

            # Installing PHP and it's dependencies
            sudo apt-get -y install php5 libapache2-mod-php5 php5-mcrypt

        SHELL
    end

end