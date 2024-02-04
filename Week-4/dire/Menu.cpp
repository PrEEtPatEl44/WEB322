/*
Name - Sukhpreet Singh
Student ID - 140337221
Mail id - ssingh1336@myseneca.ca
*/

/* Citation and Sources...
Final Project Milestone 1
Module: Utils
Filename: Utils.cpp
Version 1.0
Author	Sukhpreet Singh
Revision History
-----------------------------------------------------------
Date      Reason
2023/11/8 Preliminary release
2023/11/8 Debugged DMA
-----------------------------------------------------------
I have done all the coding by myself and only copied the code
that my professor provided to complete my workshops and assignments.
-----------------------------------------------------------*/

#include "Menu.h" 
namespace sdds {
	Menu::Menu(const char* str){
		this->menuContent = nullptr;
		if (str != nullptr && (ut.charCount(str, '\t')+1) <= 15) {
			this->menuContent = new char[strlen(str)+1];
			strcpy(this->menuContent, str);
		}
	}

	Menu::~Menu() {
		delete[] this->menuContent;
		this->menuContent = nullptr;
	}

	unsigned int Menu::run() const {
		int count = ut.charCount(this->menuContent, '\t') + 1;
		if (this->menuContent == nullptr || count > 15) {
			std::cout << "Invalid Menu!" << std::endl;
			return 0;
		}
		else {
			int i = 0;
			int j = 0;
			do{
				std::cout << ++i << "- ";
				while(this->menuContent[j] != '\t'&&j<(int)strlen(this->menuContent)) {
					std::cout << this->menuContent[j];
					j++;
				}
				j++;
				std::cout << std::endl;
			} while (i < count);
			std::cout << "---------------------------------" <<std::endl<< "0- Exit" << std::endl;
			int option = ut.getint(0, count, "> ");
			return option;
		}
	}

	void Menu::setContent(const char* str) {
		if (str != nullptr && (ut.charCount(str, '\t') + 1) <= 15) {
			delete[] this->menuContent;
			this->menuContent = new char[strlen(str)+1];
			strcpy(this->menuContent, str);
		}
	}

	char* Menu::getContent() const{
		return this->menuContent;
	}

}